import {TypeSearch, TypeSort} from "../enum/enum";

interface IBtn {
    id: number,
    title: TypeSort | TypeSearch,
    active?: boolean,
}

export { IBtn }
