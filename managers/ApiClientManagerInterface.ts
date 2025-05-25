export interface ApiClientManagerInterface {
  get<T>(path: string, params?: Record<string, any>): Promise<T>;
  post<T>(path: string, body?: Record<string, any>): Promise<T>;
  patch<T>(path: string, body?: Record<string, any>): Promise<T>;
}
