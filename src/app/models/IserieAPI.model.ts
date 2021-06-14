/* eslint-disable @typescript-eslint/naming-convention */
export interface ISerieApi {
  backdrop_path?: string;
  created_by?: string[];
  id?: number;
  credit_id?: string;
  name?: string;
  gender?: number;
  profile_path?: string;
  episode_number?:number;
  genre_ids?: number[];
  vote_average?:number;
}

export interface IListaSeries {
  page: number;
  results: ISerieApi[];
  total_results: number;
  total_pages: number;
}
