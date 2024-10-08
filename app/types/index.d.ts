export interface PaginationResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links?: {
      url: null | string;
      label: string;
      active: boolean;
    }[];
    next_page_url: null;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
  }
  
  export interface ApiResponse<Data> {
    status: string;
    success: boolean;
    data: Data;
    message: null;
    code: number;
  }
  

  export type DevToolsProps = {
    id: number;
    name: string;
    slug: string;
    description?: string;
    pricing: "free" | "paid" | "trial" | "freemium";
    type: string;
    url: string;
    tutorial_url: string;
    created_at: null;
    updated_at: null;
  };


  export type CategoryProps = {
    id?: number;
    name: string;
    slug: string;
    image?: string;
    created_at?: string;
    updated_at?: string;
  };
  
  


interface Mark {
    type: string;
  }
  
  export interface ContentTextItem {
    text: string;
    type: string;
    marks?: Mark[];
  }
  
  export interface ContentItem {
    type: string;
    attrs?: {
      level?: number;
      src?: string;
      width?: number;
      height?: number;
      alt?: string;
      title?: string;
      start?: number;
      tight?: boolean;
      language?: string;
    };
    content?: ContentTextItem[];
  }
  
  export interface ContentRendererProps {
    content: ContentItem[];
  }
  
  //  type JSONContent = {
  //   type?: string;
  //   attrs?: Record<string, any>;
  //   content?: ContentRendererProps[];
  //   marks?: {
  //     type: string;
  //     attrs?: Record<string, any>;
  //     [key: string]: any;
  //   }[];
  //   text?: string;
  //   [key: string]: any;
  // };
  
  export type ContentProps = {
    id?: number;
    user_id: number;
    title: string;
    slug: string;
    subtitle?: string;
    status:
      | "draft"
      | "pending"
      | "publish"
      | "revision"
      | "future"
      | "private"
      | "trash"
      | "inherit";
    content?: ContentRendererProps | null;
    parent: number;
    post_type: "article" | "series" | "page";
    comment_count: number;
    order: number;
    resources?: unknown;
    created_at: string; // ISO date string
    updated_at: string; // ISO date string
    deleted_at?: string | null; // ISO date string, nullable
    featured_image?: FeaturedImageProps;
    category_id?: number | string;
    categories?: CategoryProps[];
    devTools?: DevToolsProps[];
    dev_tool_ids?: number[] | string[];
  };
  
  type FeaturedImageProps = {
    id?: number;
    path: string;
    mimeType: string;
    size: number;
    created_at: Date;
    updated_at: Date;
    url: string;
  };
  