import { actionTypes } from './actionTypes';
import { IFilm } from '../../common/interfaces/Flims.interface';

export const setActiveFilm = (film: IFilm | null) => ({
  type: actionTypes.SET_ACTIVE_FILM,
  payload: film,
});
