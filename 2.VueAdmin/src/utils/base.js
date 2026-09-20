const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot7ogi87rn/",
            name: "springboot7ogi87rn",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot7ogi87rn/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于SpringBoot的公寓出租系统的设计与实 现"
        } 
    }
}
export default base
