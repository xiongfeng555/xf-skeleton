import XfSkeleton  from "./src/components/skeleton/index.js";
import info from './package.json'

const components = [XfSkeleton]

const install = Vue =>{
    components.forEach(item=>{
        Vue.component(item.name,item)
    })
}

//引用文件方式时，会使用，类似jquery方式引入
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    XfSkeleton
}

export default {
    name:info.name,
    author:info.author,
    version:info.version,
    description:info.description,
    install,
    XfSkeleton
}