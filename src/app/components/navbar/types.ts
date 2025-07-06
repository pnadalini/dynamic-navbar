enum PageTypes {
  Info = "info",
  Document = "document",
  Ending = "ending",
}

interface IPage {
  id: number;
  type: PageTypes;
  isActive: boolean;
  text: string;
}

export { PageTypes, IPage };
