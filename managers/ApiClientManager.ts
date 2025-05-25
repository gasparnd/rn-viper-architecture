import { create, ApiResponse } from 'apisauce';
import { ApiClientManagerInterface } from './ApiClientManagerInterface';

export class ApiClientManager implements ApiClientManagerInterface {
  private api;

  constructor(baseURL: string) {
    this.api = create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });
  }

  private handleResponse<T>(response: ApiResponse<T>): T {
    if (!response.ok || !response.data) {
      const errorMessage = response.problem || 'Unknown error';
      throw new Error(`API Error: ${errorMessage}`);
    }
    return response.data;
  }

  async get<T>(path: string, params?: Record<string, any>): Promise<T> {
    const response = await this.api.get<T>(path, params);
    return this.handleResponse(response);
  }

  async post<T>(path: string, body?: Record<string, any>): Promise<T> {
    const response = await this.api.post<T>(path, body);
    return this.handleResponse(response);
  }

  async patch<T>(path: string, body?: Record<string, any>): Promise<T> {
    const response = await this.api.patch<T>(path, body);
    return this.handleResponse(response);
  }
}
