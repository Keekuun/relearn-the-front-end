### .gitignore配置规则示例

| 规则 | 作用 |
|:---|:---|
|/dist|忽略根目录下dist文件夹，不会忽略其他目录下的dist文件（如/app/build）|
|*.zip|忽略所有.zip格式的文件|
|/*.json|忽略根目录下.json文件，不忽略其他目录下的.json文件|
|!hello.zip|不忽略hello.zip文件|
|temp/|忽略当前目录下temp文件夹及其下的文件，但是不忽略temp文件（temp.txt）|
|home/*.txt|只忽略home目录下的.txt文件,home子目录的.txt不被忽略（如/home/doc/xx.txt）|
|home/\*\*/*.csv|忽略home目录下以及子目录下的所有.csv文件|
|**/foo|忽略/foo, a/foo, a/b/foo等|
|a/**/b|忽略a/b, a/x/b, a/x/y/b等|

> 注意：如果在创建`.gitignore`之前就`push`了某个文件，那么你在`.gitignore`中的配置就不会忽略掉该文件，`git`仍然会对该文件进行版本管理。解决方法，后面会讲到。

### .gitignore配置语法

| 符号 | 作用 |
|---|---|
|`#开头`|注释|
|\|转义|
|`/开头`|匹配根目录|
|`/结束`|匹配文件夹以及文件夹下的内容，不匹配该文件|
|`*`|通配符（类似正则，区别于正则），匹配任意多个字符|
|`**`|匹配多级目录，可放在开始，中间或者结束|
|`?`|通配单个字符|
|`[abc]`|匹配a或b或c中任意一个字符|
|`!开头`|非，表示不忽略匹配到的文件或目录|

> 匹配方式按照`.gitignore`文件`从上到下`的顺序，类似于html的渲染。

### .gitignore使用方式
> 现在，我想忽略提交某些文件

+ 创建`.gitignore`文件

在 .gitingore 文件中，遵循相应的语法，在每一行指定一个忽略规则。如：
```txt
/node_modules
*.temp
/dist
```

+ 解决已经`push`操作之后，想忽略某个文件

因为`push`之后，文件已经纳入了版本控制，`.gitignore`中匹配规则不能生效，此时，应该如下操作：
```
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```
即先删除缓存，再次提交。

> 文中如有错误，希望指正，谢谢。