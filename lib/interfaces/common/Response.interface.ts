export interface IResponseHttp<T> {
    data:        T;
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    support:     Support;
}

export interface Support {
    url:  string;
    text: string;
}
