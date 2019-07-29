/**
 DNS 模块:
 Node.js DNS 模块用于解析域名。

 方法：
 dns.lookup(hostname[, options], callback)
 将域名（比如 'w3cschool.cn'）解析为第一条找到的记录 A （IPV4）或 AAAA(IPV6)。参数 options可以是一个对象或整数。如果没有提供 options，IP v4 和 v6 地址都可以。如果 options 是整数，则必须是 4 或 6。

 dns.lookupService(address, port, callback)
 使用 getnameinfo 解析传入的地址和端口为域名和服务。

 dns.resolve(hostname[, rrtype], callback)
 将一个域名（如 'runoob.com'）解析为一个 rrtype 指定记录类型的数组。

 dns.resolve4(hostname, callback)
 和 dns.resolve() 类似, 仅能查询 IPv4 (A 记录）。 addresses IPv4 地址数组 (比如，['84.85.88.104', '66.128.99.105', '33.125.19.16']）。

 dns.resolve6(hostname, callback)
 和 dns.resolve4() 类似， 仅能查询 IPv6( AAAA 查询）

 dns.resolveTxt(hostname, callback)
 和 dns.resolve() 类似, 仅能查询邮件交换(MX 记录)。

 dns.resolveSrv(hostname, callback)
 和 dns.resolve() 类似, 仅能进行服务记录查询 (SRV 记录）。 addresses 是 hostname可用的 SRV 记录数组。
 SRV记录属性有优先级（priority），权重（weight）, 端口（port）, 和名字（name） (比如，[{'priority': 10, 'weight':                     5, 'port': 21223, 'name': 'service.example.com'}, ...]）。

 dns.resolveSoa(hostname, callback)
 和 dns.resolve() 类似, 仅能查询权威记录(SOA 记录）。

 dns.resolveNs(hostname, callback)
 和 dns.resolve() 类似, 仅能进行域名服务器记录查询(NS 记录）。 addresses 是域名服务器记录数组（hostname可以使用） (比如, ['ns1.example.com', 'ns2.example.com']）

 dns.resolveCname(hostname, callback)
 和 dns.resolve() 类似, 仅能进行别名记录查询 (CNAME记录)。addresses 是对 hostname 可用的别名记录数组 。

 dns.reverse(ip, callback)
 反向解析 IP 地址，指向该 IP 地址的域名数组。

 dns.getServers()
 返回一个用于当前解析的 IP 地址数组的字符串。

 dns.setServers(servers)
 指定一组 IP 地址作为解析服务器。

 * */