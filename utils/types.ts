import { ReactNode } from "react";

export type PostFormApi = {
  id: string;
  postTypeCode: string;
  title: string;
  description: string;
  inActive: boolean;
  fixDate: string;
  createDate: string;
  PostImages: { imageUrl: string }[];
  postByUser: { username: string };
};

export type Post = {
  id: string;
  postTypeCode: string;
  title: string;
  description: string;
  inActive: boolean;
  imageUrl: string;
  postByUser: string;
  createDate: string;
  fixDate: string;
};

export type Pagetination = {
  page: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
};

export type User = {
  id: string;
  username: string;
  email: string | null;
  nickname: string | null;
  role: string;
};

export type NavItems = {
  text: string;
  href: string;
}[];

export interface TableHeaderConfig {
  label: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
}

interface TableCellData {
  value?: ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
}

export type TableRow = { [key: string]: TableCellData | undefined };

export interface TableProps {
  headers: TableHeaderConfig[][];
  data: TableRow[];
  className?: string;
}

export type MobileAccordionProps = {
  title: ReactNode;
  content: ReactNode;
};

export type ContentProps = {
  title: ReactNode;
  value: ReactNode | ReactNode[];
};

export type ContentSubProps = {
  title: ReactNode;
  value: {
    subTitle: ReactNode;
    subValue: ReactNode;
  }[];
};

export type DownloadProps = {
  cateName: string;
  DocCateSub: {
    docCateId: number;
    subCateName: string;
    DocListDownload: {
      docName: string;
      attachName: string;
      seqNo: number;
    }[];
  }[];
};

export type DownloadSubProps = {
  docName: string;
  attachName: string;
  seqNo: number;
};

export type InformationProps = {
  cat_id: number;
  cat_name: string;
  cat_items: {
    sub_cat_id: number;
    sub_cat_name: string;
    sub_cat_items: {
      info_id: number;
      info_name: string;
      attachment: string;
    }[];
  }[];
};

export type InformationSubCatProps = {
  info_id: number;
  info_name: string;
  attachment: string;
};

export type GalleryFeatureProps = {
  id: number;
  topic: string;
  gallery_cover: string;
};

export type GalleryProps = {
  id: number;
  topic: string;
  postdate: string;
  gallery_cover: string;
  photos: string[];
};

export type AnnouncementFeatureProps = {
  id: number;
  name: string;
  postdate: string;
};

export type AnnouncementProps = {
  id: number;
  name: string;
  detail: string;
  attachment: string;
  postdate: string;
};

export type PerformanceDataItemProps = {
  id: number;
  category: string;
  code: string;
  value: string;
  description: string;
};

export type bannersProps = {
  id: number;
  url: string | null;
  image: string;
};

export type CommitteeMember = {
  id: number;
  level: number;
  rank: number;
  name: string;
  position: string;
  category: string;
  department: string;
  image: string;
};

export type RegulationProps = {
  id: number;
  name: string;
  attachment: string;
  postdate: string;
};
