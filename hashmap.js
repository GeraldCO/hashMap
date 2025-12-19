class Hashmap{
    constructor(initialCapacity = 16){
        //Array of buckets (capacity)
        //Each bucket will store an aray of [key, value] pairs
        this.buckets = new Array(initialCapacity);
        this.storedItems = 0;

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
        var hashedKey = this.hash(key);
        if(buckets[hashedKey]){
            this.buckets[hashed] = new Array({key : value});
        }else{
            this.buckets[hashed] = new Array();
            this.buckets[hashed].push({key : value})
            this.storedItems = this.storedItems + 1;
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
            this.storedItems = this.storedItems - 1;
            return true;
        }else{
            return false;
        }
    }

    length(){
        return this.storedItems;
    }


    clear(){
        this.buckets = new Array(16);
    }

}