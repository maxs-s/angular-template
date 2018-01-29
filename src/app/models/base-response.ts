export interface BaseResponse<T> {
    
    data: T;
    errorMessage: string,    
    isSuccessfull: boolean
    
}