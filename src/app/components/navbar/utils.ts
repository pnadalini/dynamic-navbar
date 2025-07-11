enum PageTypes {
  Info = "info",
  Document = "document",
  Ending = "ending",
}

interface IPage {
  id: number;
  type: PageTypes;
  text: string;
}

const allPages = [
  { id: 1, type: PageTypes.Info, text: "Info" },
  { id: 2, type: PageTypes.Document, text: "Details" },
  { id: 3, type: PageTypes.Document, text: "Other" },
  { id: 4, type: PageTypes.Ending, text: "Ending" },
  { id: 5, type: PageTypes.Info, text: "Form" },
  { id: 6, type: PageTypes.Document, text: "Cover" },
  { id: 7, type: PageTypes.Document, text: "Review" },
  { id: 8, type: PageTypes.Ending, text: "Payment" },
  { id: 9, type: PageTypes.Ending, text: "Login" },
  { id: 10, type: PageTypes.Ending, text: "Scheduling" },
];

const [info, details, other, ending] = allPages;
const initialPages = [info, details, other, ending];
const initialActivePage = info.id;

const getNextPage = (pages: IPage[]): IPage | undefined => {
  return allPages.find((page) => !pages.find((x) => x.id === page.id));
};

export { PageTypes, initialPages, getNextPage, initialActivePage };
export type { IPage };
