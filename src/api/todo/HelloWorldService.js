import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello');
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hellobean');
    }

    executeHelloWorldPathVariableService(name) {
        //console.log('executed service')
        return axios.get(`http://localhost:8080/hellobean/pathvariable/${name}`);
    }
}

export default new HelloWorldService()