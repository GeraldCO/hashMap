class Hashmap{
    constructor(initialCapacity = 16, loadFactor = 0.75){
        //Array of buckets (capacity)
        //Each bucket will store an aray of [key, value] pairs
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(16);
        this.size = 0;
        
    }

    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value){
        var index = this.hash(key);
        if(this.buckets[index]){
            this.buckets[index] = new Array({key, value});
        }else{
            this.buckets[index] = new Array();
            this.buckets[index].push({key,  value})
            this.size = this.size + 1;
        }
            
    }

    get(key){

        if(this.buckets[this.hash(key)]){
            return  this.buckets[this.hash(key)][0][key]
        }else {
            return null
        }
    }

    has(key){
        if(this.buckets[this.hash(key)]){
            return true
        }else{
            return false
        }
    }

    remove(key){
        if(this.has(key)){
            this.buckets.splice(this.hash(key), 1);
            this.size = this.size - 1;
            return true;
        }else{
            return false;
        }
    }

    length(){
        return this.size;
    }

    clear(){
        this.buckets = new Array(16);
    }

}