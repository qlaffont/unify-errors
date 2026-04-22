export interface ErrorResponse {
  code?: string;
  message?: string;
  details: string[];
  localizedMessage?: string;
}
