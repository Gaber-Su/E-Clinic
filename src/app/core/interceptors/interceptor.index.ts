import { errorsInterceptor } from "./errors.interceptor";
import { headersInterceptor } from "./headers.interceptor";

const CoreInterceptors = [ headersInterceptor, errorsInterceptor]
export default CoreInterceptors