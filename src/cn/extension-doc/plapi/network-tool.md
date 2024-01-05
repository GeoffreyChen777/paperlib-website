# NetworkTool

## Call

```typescript
import { PLAPI } from "paperlib-api/api";

PLAPI.networkTool.methodname(...);
```

## Avaliable Methods

### `setProxyAgent`

```typescript
/**
 * Set proxy agent
 * @param proxy - Proxy url
 */
setProxyAgent(proxy?: string): Promise<void>;
```

### `checkSystemProxy`

```typescript
/**
 * Check system proxy, if exists, set it as proxy agent
 */
checkSystemProxy(): Promise<void>;
```

### `get`

```typescript
/**
 * HTTP GET
 * @param url - URL
 * @param headers - Headers
 * @param retry - Retry times
 * @param timeout - Timeout
 * @param cache - Use cache
 * @returns Response
 */
get(url: string, headers?: Record<string, string>, retry?: number, timeout?: number, cache?: boolean): Promise<Response>;
```

### `post`

```typescript
/**
 * HTTP POST
 * @param url - URL
 * @param data - Data
 * @param headers - Headers
 * @param retry - Retry times
 * @param timeout - Timeout
 * @param compress - Compress data
 * @returns Response
 */
post(url: string, data: Record<string, any> | string, headers?: Record<string, string>, retry?: number, timeout?: number, compress?: boolean): Promise<Response>;
```

### `postForm`

```typescript
/**
 * HTTP POST with form data
 * @param url - URL
 * @param data - Data
 * @param headers - Headers
 * @param retry - Retry times
 * @param timeout - Timeout
 * @returns Response
 */
postForm(url: string, data: FormData, headers?: Record<string, string>, retry?: number, timeout?: number): Promise<Response_2<string>>;
```

### `download`

```typescript
/**
 * Download
 * @param url - URL
 * @param targetPath - Target path
 * @param cookies - Cookies
 * @returns Target path
 */
download(url: string, targetPath: string, cookies?: CookieJar | ICookieObject[]): Promise<string>;
```

### `downloadPDFs`

```typescript
/**
 * Download PDFs
 * @param urlList - URL list
 * @param cookies - Cookies
 * @returns Target paths
 */
downloadPDFs(urlList: string[], cookies?: CookieJar | ICookieObject[]): Promise<string[]>;
```

### `connected`

```typescript
/**
 * Check if the network is connected
 * @returns Whether the network is connected
 */
connected(): Promise<boolean>;
```

## Response Type

```typescript
interface Response {
  body: string;
  headers: Record<string, string>;
  statusCode: number;
}
```