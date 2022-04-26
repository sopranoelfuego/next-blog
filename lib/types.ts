export interface IPost {
 id: number
 title: string
 content: string
}

export interface IPostResponse {
 success: boolean
 data: IPost[]
}
