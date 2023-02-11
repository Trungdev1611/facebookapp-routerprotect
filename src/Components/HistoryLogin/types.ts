export interface IPropsHistoryLogin {
  img: string;
  username: string;
  id?: number;
}

export interface IDataInfo {
  email: string;
  password: string;
}
export interface Iform {
  submitForm: (data: IDataInfo) => void;
  textbtn: string;
}
//constant
export const sxHistoryLogin = {
  width: "120px",
  borderRadius: 2,
  overflow: "hidden",

  "& img": {
    padding: "5px 0 5px 0",
    width: "100%",
    height: "120px",
    objectFit: "cover",
    // border: "0.5px solid gray",
  },
  boxShadow: 1,
  textAlign: "center",
  "& .nameUser": {
    padding: "5px 0",
  },
};

export const itemUser: Array<IPropsHistoryLogin> = [
  {
    id: 1,
    img: "https://cdn.xxl.thumbs.canstockphoto.com/fashion-photo-of-beautiful-women-under-blue-veil-beauty-portrait-stock-photo_csp13242328.jpg",
    username: "Maria",
  },
  {
    id: 2,
    img: "https://cdn.xxl.thumbs.canstockphoto.com/close-up-of-a-beautiful-butterfly-stock-photography_csp1583160.jpg",
    username: "Butterfly",
  },
  {
    id: 3,
    img: "https://cdn.xxl.thumbs.canstockphoto.com/beautiful-woman-with-magnificent-hair-photo-of-beautiful-woman-with-magnificent-hair-picture_csp6051397.jpg",
    username: "MyWife",
  },
];
