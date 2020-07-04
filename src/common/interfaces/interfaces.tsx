import { TypeSearch, TypeSort, SortButtonNames, SearchButtonNames } from "../enum/enum";

export type TBtn = {
  id: TypeSort | TypeSearch,
  title: SortButtonNames | SearchButtonNames,
}
