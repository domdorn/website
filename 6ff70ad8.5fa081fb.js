(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{140:function(e,t,a){"use strict";function n(e,t){return t||(t=e.slice(0)),e.raw=t,e}a.d(t,"a",(function(){return n}))},141:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t="string"==typeof e?[e]:e.raw,a="",n=0;n<t.length;n++)a+=t[n].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),n<(arguments.length<=1?0:arguments.length-1)&&(a+=arguments.length<=n+1?void 0:arguments[n+1]);var r=a.split("\n"),o=null;r.forEach((function(e){var t=e.match(/^(\s+)\S+/);if(t){var a=t[1].length;o=o?Math.min(o,a):a}})),null!==o&&(s=o,a=r.map((function(e){return" "===e[0]?e.slice(s):e})).join("\n"));var s;return a.trim().replace(/\\n/g,"\n")}},142:function(e,t,a){"use strict";(function(e){var t=a(23);(void 0!==e?e:window).Prism=t.a,a(143)}).call(this,a(24))},143:function(e,t){Prism.languages.scala=Prism.languages.extend("java",{keyword:/<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},builtin:/\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,number:/\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,symbol:/'[^\d\s\\]\w*/}),delete Prism.languages.scala["class-name"],delete Prism.languages.scala.function},144:function(e){e.exports=JSON.parse('{"version":"8.6.0","ltsVersion":"7.9.0","lts67Version":"6.8.0","sbtSonarVersion":"2.2.0"}')},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return g})),a.d(t,"default",(function(){return h}));var n=a(140),r=a(3),o=a(7),s=(a(0),a(91)),c=a(141),i=a.n(c),l=(a(142),a(144));function u(){var e=Object(n.a)(['\n    scapegoatVersion in ThisBuild := "1.3.9"\n    scapegoatReports := Seq("xml")\n  ']);return u=function(){return e},e}function p(){var e=Object(n.a)(['\n    addSbtPlugin("org.scoverage" % "sbt-scoverage" % "1.6.1")\n    addSbtPlugin("com.github.mwz" % "sbt-sonar" % "','")\n  ']);return p=function(){return e},e}var b={title:"Getting Started"},d={unversionedId:"setup/getting-started",id:"setup/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"For an out-of-the-box setup, you can use the following docker-compose recipe or",source:"@site/docs/setup/getting-started.mdx",slug:"/setup/getting-started",permalink:"/docs/setup/getting-started",editUrl:"https://github.com/sonar-scala/website/edit/master/docs/setup/getting-started.mdx",version:"current",sidebar:"docs",previous:{title:"Compatibility with SonarQube",permalink:"/docs/about/compatibility-with-sonarqube"},next:{title:"Sonar-scanner Properties",permalink:"/docs/setup/sonar-scanner-properties"}},g=[{value:"Quick start",id:"quick-start",children:[]},{value:"Scapegoat",id:"scapegoat",children:[]}],m={toc:g};function h(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"For an out-of-the-box setup, you can use the following docker-compose recipe or\na docker image with SonarQube which contains bundled sonar-scala plugin. Please\nsee ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mwz/sonar-scala-docker"}),"mwz/sonar-scala-docker")," for more\ndetails or simply follow this guide."),Object(s.b)("p",null,"Alternatively, if you already have a SonarQube instance or you don't want to use\nDocker, you can download the latest\n",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mwz/sonar-scala/releases"}),"release")," jar into your SonarQube\nplugins folder ",Object(s.b)("inlineCode",{parentName:"p"},"/opt/sonarqube/extensions/plugins")," and restart SonarQube either\nmanually or using the update center."),Object(s.b)("p",null,"For automating the analysis of your Scala projects, check out\n",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mwz/sbt-sonar"}),"mwz/sbt-sonar")," sbt plugin and the\ndocumentation ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/sbt-sonar"}),"here"),". Alternatively, see the\n",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mwz/sonar-scala/tree/master/examples"}),"examples")," directory in\nsonar-scala repository, which includes example projects for SBT ",Object(s.b)("em",{parentName:"p"},"(",Object(s.b)("inlineCode",{parentName:"em"},"1.x"),")"),",\nGradle ",Object(s.b)("em",{parentName:"p"},"(",Object(s.b)("inlineCode",{parentName:"em"},"5.x"),")")," and Maven ",Object(s.b)("em",{parentName:"p"},"(",Object(s.b)("inlineCode",{parentName:"em"},"3.x"),")")," along with basic instructions on how to\nexecute SonarQube analysis for each of those projects without sbt-sonar."),Object(s.b)("h2",{id:"quick-start"},"Quick start"),Object(s.b)("p",null,"Let's start off by adding the following sbt plugins to your Scala project, in\nthe ",Object(s.b)("inlineCode",{parentName:"p"},"./project/plugins.sbt")," file:"),Object(s.b)("code",{className:"language-scala"},i()(p(),l.sbtSonarVersion)),Object(s.b)("p",null,"We've added the ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/scoverage/sbt-scoverage"}),"sbt-scoverage"),"\nplugin so that we can generate a coverage report and the\n",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/sbt-sonar"}),"sbt-sonar")," plugin to easily trigger an analysis via an sbt task."),Object(s.b)("p",null,"Let's start a local SonarQube server for demonstration purposes."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run -p 80:9000 \\\n  mwizner/sonarqube-scala-plugins:latest-full\n")),Object(s.b)("p",null,"Once SonarQube starts up, you should see the message saying that\n",Object(s.b)("inlineCode",{parentName:"p"},"SonarQube is up")," and the UI should be available through ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost."}),"http://localhost.")," The\nlogin credentials are ",Object(s.b)("inlineCode",{parentName:"p"},"admin:admin")," in case you want to browse around."),Object(s.b)("div",{className:"alert alert--warning",role:"alert"},"Since we haven't specified an external database for SonarQube to use, it runs in a demo mode using an embedded database, which will be lost once the docker container is stopped. Please use an external database in a production environment."),Object(s.b)("p",null,"Finally, let's execute a SonarQube scan via sbt."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sbt -Dsonar.host.url=http://localhost \\\n  clean coverage test coverageReport sonarScan\n")),Object(s.b)("p",null,"Once the scan completes successfully, you can navigate to\nhttp://localhost/projects to see the results."),Object(s.b)("p",null,"This basic setup should report to SonarQube all of the useful Size, Coverage and\nTest metrics (listed ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/about/supported-metrics"}),"here"),") in addition to raising\nany Scalastyle issues that were identified in your project."),Object(s.b)("div",{className:"alert alert--warning",role:"alert"},"Running analysis from a Windows machine is currently not supported - please use Linux or other Unix-like operating system."),Object(s.b)("h2",{id:"scapegoat"},"Scapegoat"),Object(s.b)("p",null,"Let's add ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/sksamuel/scapegoat"}),"Scapegoat")," to our project to\nget even more useful report."),Object(s.b)("p",null,"Add following sbt plugin to your Scala project, in the ",Object(s.b)("inlineCode",{parentName:"p"},"./project/plugins.sbt"),"\nfile:"),Object(s.b)("code",{className:"language-scala"},'addSbtPlugin("com.sksamuel.scapegoat" % "sbt-scapegoat" % "1.1.0")'),Object(s.b)("p",null,"Set the latest Scapegoat version and the format of a report generated by\nScapegoat in your ",Object(s.b)("inlineCode",{parentName:"p"},"build.sbt")," file:"),Object(s.b)("code",{className:"language-scala"},i()(u())),Object(s.b)("p",null,"Also, to make sure your project doesn't fail to compile due to any Scapegoat\nerrors, you can temporarily override the default severity level of all the\ninspections - all Scapegoat issues will be still reported to SonarQube with the\ncorrect severity level according to the configuration in your quality profile."),Object(s.b)("code",{className:"language-scala"},'scalacOptions in Scapegoat += "-P:scapegoat:overrideLevels:all=Warning"'),Object(s.b)("p",null,"You can now run the ",Object(s.b)("inlineCode",{parentName:"p"},"scapegoat")," task using sbt, which should generate a report\nwith all the style issues that Scapegoat identified."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sbt scapegoat\n")),Object(s.b)("p",null,"Once you've done that, you will need to run the ",Object(s.b)("inlineCode",{parentName:"p"},"sonarScan")," task again to\ninclude the Scapegoat report in SonarQube analysis."),Object(s.b)("p",null,"Here are all of the sbt tasks put together:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sbt -Dsonar.host.url=http://localhost \\\n  clean coverage test coverageReport scapegoat sonarScan\n")))}h.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,g=p["".concat(s,".").concat(d)]||p[d]||b[d]||o;return a?r.a.createElement(g,c(c({ref:t},l),{},{components:a})):r.a.createElement(g,c({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);