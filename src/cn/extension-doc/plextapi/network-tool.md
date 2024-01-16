# NetworkTool

## Call

```typescript
import { PLExtAPI } from "paperlib-api/api";

PLExtAPI.networkTool.methodname(...);
```

## Avaliable Methods

### `setProxyAgent`

```typescript
/**
 * Set proxy agent
 * @param httpproxy - HTTP proxy
 * @param httpsproxy - HTTPS proxy
 */
setProxyAgent(httpproxy?: string, httpsproxy?: string): void;
```

### `checkSystemProxy`

```typescript
/**
 * Check system proxy, if exists, set it as proxy agent
 */
checkProxy(): Promise<void>;
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
 * @param parse - Try to parse response body
 * @returns Response
 */
get(url: string, headers?: Record<string, string>, retry?: number, timeout?: number, cache?: boolean, parse?: boolean): Promise<{
    body: any;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}>;
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
 * @param parse - Try to parse response body
 * @returns Response
 */
post(url: string, data: Record<string, any> | string, headers?: Record<string, string>, retry?: number, timeout?: number, compress?: boolean, parse?: boolean): Promise<{
    body: any;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}>;
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
postForm(url: string, data: FormData, headers?: Record<string, string>, retry?: number, timeout?: number, parse?: boolean): Promise<{
    body: any;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}>;
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