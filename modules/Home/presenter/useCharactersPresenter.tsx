import { useCallback, useEffect, useState } from 'react';
import {
  CharactersInteractorInterface,
  GetCharacterParams,
} from '../interactor/CharactersInteractorInterface';
import { CharactersPresenterInterface } from './CharactersPresenterInterface';
import { CharacterEntity } from '../entities/CharacterEntity';

export function useCharactersPresenter(
  interactor: CharactersInteractorInterface
): CharactersPresenterInterface {
  const [characters, setCharacters] = useState<CharacterEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const getCharactaters = useCallback(
    async (params: GetCharacterParams) => {
      setLoading(true);
      try {
        const response = await interactor.getCharactaters(params);
        setCharacters((prevValue) => [...prevValue, ...response.results]);
      } catch (error) {
        console.log('🚀 ~ getCharactacters ~ error:', error);
      } finally {
        setLoading(false);
      }
    },
    [interactor]
  );

  const fetchNextCharactersPage = useCallback(async () => {
    setPage((prevPage) => prevPage + 1);
    await getCharactaters({ page: page + 1 });
  }, [getCharactaters, page]);

  useEffect(() => {
    if (!interactor) {
      return;
    }

    getCharactaters({ page: 1 });
  }, [interactor, getCharactaters]);

  return { getCharactaters, characters, loading, fetchNextCharactersPage };
}
