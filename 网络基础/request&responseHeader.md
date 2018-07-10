# 请求头和响应头
> 其中一些字段[wiki](https://zh.wikipedia.org/wiki/HTTP%E5%A4%B4%E5%AD%97%E6%AE%B5)的含义

## 正文

### 请求头

* Accept                        指定客户端能够接收的内容类型。如Accept:text/plain, text/html
* Accept-Charset                浏览器可以接受的字符编码集。如Accept-Charset:iso-8859-5
* Accept-Encoding               指定浏览器可以支持的web服务器返回内容压缩编码类型。Accept-Encoding: compress, gzip
* Accept-Language               浏览器可接受的语言。如Accept-Language:en,zh
* Accept-Ranges                 可以请求网页实体的一个或者多个子范围字段。如Accept-Ranges: bytes
* Authorization                 HTTP授权的授权证书。如Authorization:Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
* Cache-Control                 指定请求和响应遵循的缓存机制。如Cache-Control:no-cache
* Connection                    表示是否需要持久连接。（HTTP 1.1默认进行持久连接）。如Connection:close
* Cookie                        HTTP请求发送时，会把保存在该请求域名下的所有cookie值一起发送给web服务器。如Cookie:$Version=1; Skin=new;
* Content-Length                请求的内容长度。如Content-Length:348
* Content-Type                  请求的与实体对应的MIME信息          。如Content-Type:application/x-www-form-urlencoded
* Date                          请求发送的日期和时间。如Date:Tue, 15 Nov 2010 08:12:31 GMT
* Expect                        请求的特定的服务器行为。如Expect:100-continue
* From                          发出请求的用户的Email。如From:user@email.com
* Host                          指定请求的服务器的域名和端口号。如Host:www.zcmhi.com
* If-Match                      只有请求内容与实体相匹配才有效。如If-Match:“737060cd8c284d8af7ad3082f209582d”
* If-Modified-Since             如果请求的部分在指定时间之后被修改则请求成功，未被修改则返回304代码。如If-Modified-Since: Sat, 29 Oct 2010 19:43:31 GMT
* If-None-Match                 如果内容未改变返回304代码，参数为服务器先前发送的Etag，与服务器回应的Etag比较判断是否改变。如If-None-Match: “737060cd8c284d8af7ad3082f209582d”
* If-Range                      如果实体未改变，服务器发送客户端丢失的部分，否则发送整个实体。参数也为Etag。如If-Range: “737060cd8c284d8af7ad3082f209582d”
* If-Unmodified-Since           只在实体在指定时间之后未被修改才请求成功。如If-Unmodified-Since: Sat, 29 Oct 2010 19:43:31 GMT
* Max-Forwards                  限制信息通过代理和网关传送的时间。如Max-Forwards:10
* Pragma                        用来包含实现特定的指令。如Pragma:no-cache
* Proxy-Authorization           连接到代理的授权证书。如Proxy-Authorization:Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
* Range                         只请求实体的一部分，指定范围。如Range:bytes=500-999
* Referer                       先前网页的地址，当前请求网页紧随其后,即来路。如Referer:http://www.zcmhi.com/archives/71.html
* TE                            客户端愿意接受的传输编码，并通知服务器接受接受尾加头信息。如TE: trailers,deflate;q=0.5
* Upgrade                       向服务器指定某种传输协议以便服务器进行转换（如果支持）。如Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
* User-Agent                    User-Agent的内容包含发出请求的用户信息。如User-Agent: Mozilla/5.0 (Linux; X11)
* Via                           通知中间网关或代理服务器地址，通信协议。如Via:1.0 fred, 1.1 nowhere.com (Apache/1.1)
* Warning                       关于消息实体的警告信息。如Warn:199 Miscellaneous warning

### 响应头

* Accept-Ranges                 表明服务器是否支持指定范围请求及哪种类型的分段请求。如Accept-Ranges: bytes
* Age                           从原始服务器到代理缓存形成的估算时间（以秒计，非负）。如Age: 12
* Allow                         对某网络资源的有效的请求行为，不允许则返回405。如Allow: GET,HEAD
* Cache-Control                 告诉所有的缓存机制是否可以缓存及哪种类型。如Cache-Control: no-cache
* Content-Encoding              web服务器支持的返回内容压缩编码类型。如Content-Encoding: gzip
* Content-Language              响应体的语言。如Content-Language:en,zh
* Content-Length                响应体的长度。如Content-Length:348
* Content-Location              请求资源可替代的备用的另一地址。如Content-Location: /index.htm
* Content-MD5                   返回资源的MD5校验值。如Content-MD5:Q2hlY2sgSW50ZWdyaXR5IQ==
* Content-Range                 在整个返回体中本部分的字节位置。如Content-Range: bytes 21010-47021/47022
* Content-Type                  返回内容的MIME类型。如Content-Type:text/html; charset=utf-8
* Date                          原始服务器消息发出的时间。如Date:Tue, 15 Nov 2010 08:12:31 GMT
* ETag                          请求变量的实体标签的当前值。如ETag: “737060cd8c284d8af7ad3082f209582d”
* Expires                       响应过期的日期和时间。如Expires:Thu, 01 Dec 2010 16:00:00 GMT
* Last-Modified                 请求资源的最后修改时间。如Last-Modified:Tue, 15 Nov 2010 12:45:26 GMT
* Location                      用来重定向接收方到非请求URL的位置来完成请求或标识新的资源。如Location: http://www.zcmhi.com/archives/94.html
* Pragma                        包括实现特定的指令，它可应用到响应链上的任何接收方。如Pragma: no-cache
* Proxy-Authenticate            它指出认证方案和可应用到代理的该URL上的参数。如Proxy-Authenticate: Basic
* refresh                       应用于重定向或一个新的资源被创造，在5秒之后重定向（由网景提出，被大部分浏览器支持）。如Refresh: 5; url=http://www.zcmhi.com/archives/94.html
* Retry-After                   如果实体暂时不可取，通知客户端在指定时间之后再次尝试。如Retry-After: 120
* Server                        web服务器软件名称。如Server:Apache/1.3.27 (Unix) (Red-Hat/Linux)
* Set-Cookie                    设置Http Cookie。如Set-Cookie:UserID=JohnDoe; Max-Age=3600; Version=1
* Trailer                       指出头域在分块传输编码的尾部存在。如Trailer:Max-Forwards
* Transfer-Encoding             文件传输编码。如Transfer-Encoding:chunked
* Vary                          告诉下游代理是使用缓存响应还是从原始服务器请求。如Vary: *
* Via                           告知代理客户端响应是通过哪里发送的。如Via:1.0 fred, 1.1 nowhere.com (Apache/1.1)
* Warning                       警告实体可能存在的问题。如Warning:199 Miscellaneous warning
* WWW-Authenticate              表明客户端请求实体应该使用的授权方案。如WWW-Authenticate:Basic