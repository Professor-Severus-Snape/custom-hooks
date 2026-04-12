export interface Items {
  id: number;
  title: string;
  path: '/loading' | '/success' | '/error';
}

export interface Data {
  status: string;
  message: string;
}

export interface ServerResponse {
  data: Data | null;
  loading: boolean;
  error: Error | null;
}
