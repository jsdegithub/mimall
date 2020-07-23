
const STORAGE_KEY='mall';

export default {
    setItem(key, value, module_name){
        if(module_name){
            let obj=this.getItem(module_name);
            obj[key]=value;
            this.setItem(module_name, obj);
        }else{
            let obj=this.getStorage();
            obj[key]=value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
        }
    },
    getItem(key, module_name){
        if(module_name){
            return this.getItem(module_name)[key] || '';
        }
        return this.getStorage()[key] || '';
    },
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(key, module_name){
        let obj=this.getStorage();
        if(module_name){
            if(!obj[module_name]) return;
            delete obj[module_name][key];
        }else{
            delete obj[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
    }
}
