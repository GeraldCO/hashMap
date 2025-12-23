class Hashmap{
    constructor(initialCapacity = 16, loadFactor = 0.75){
        //Array of buckets (capacity)
        //Each bucket will store an aray of [key, value] pairs
        this.capacity = initialCapacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(initialCapacity);
        this.size = 0;
        
    }



       hash(key) {
        // Base hash value
        let hash = 0;

        // Prime number for better key distribution
        const PRIME = 31;

        // Build the hash from the string characters
        for (let char of key) {
            hash = hash * PRIME + char.charCodeAt(0);

            // Force hash into 32-bit integer range
            hash |= 0;
        }

        // Map hash to a valid bucket index
        return Math.abs(hash) % this.buckets.length;
    }

    set(key, value){
        var index = this.hash(key);        
        if(this.buckets[index]){
            this.buckets[index] = new Array({key, value});
        }else{
            if( this.size >= (this.capacity * 0.75)){
                this.resize();
            }
            this.buckets[index] = new Array();
            this.buckets[index].push({key,  value})
            this.size = this.size + 1;
        }
            
    }

    get(key){

        if(this.buckets[this.hash(key)]){
            return this.buckets[this.hash(key)][0].value
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
        this.size = 0;
    }

    keys(){
        var keys = new Array();
        this.buckets.map((e) => {
            keys.push(e.key)
        });
        return keys;
    }

    values(){
        var values = new Array();
        this.buckets.map((e) => {
            values.push(e.value);
        })
        return values;
    }

    resize(){
        this.capacity = this.capacity * 2;
        var newA = new Array(32);
        let i = 0;
        this.buckets.map((e)=>{
            newA[i] = e;
            i++;
        });
        this.buckets = newA;
    }
}