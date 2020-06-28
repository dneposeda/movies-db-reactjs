
import { fetchFilms } from './action';
import { actionTypes } from "./actionTypes";
import { DATA } from '../../mockData/data';

describe('actions', () => {
    it('action FETCH_DATA', () => {
        expect(fetchFilms(DATA.data)).toEqual(
            {
                type: actionTypes.FETCH_FILMS,
                payload: DATA.data
            });
    });

    // it('action SORT_BY_DATE asc', () => {
    //     expect(sortByDate(DATA.data, true)).toEqual(
    //         {
    //             type: actionTypes.SORT_BY_DATE,
    //             payload: DATA.data,
    //             sortBy: true
    //         });
    // });

    // it('action SORT_BY_DATE desc', () => {
    //     expect(sortByDate(DATA.data, false)).toEqual(
    //         {
    //             type: actionTypes.SORT_BY_DATE,
    //             payload: DATA.data,
    //             sortBy: false
    //         });
    // });

    // it('action SORT_BY_RATING asc', () => {
    //     expect(sortByRating(DATA.data, true)).toEqual(
    //         {
    //             type: actionTypes.SORT_BY_RATING,
    //             payload: DATA.data,
    //             sortBy: true
    //         });
    // });

    // it('action SORT_BY_RATING desc', () => {
    //     expect(sortByRating(DATA.data, false)).toEqual(
    //         {
    //             type: actionTypes.SORT_BY_RATING,
    //             payload: DATA.data,
    //             sortBy: false
    //         });
    // });
});