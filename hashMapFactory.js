function hashMapFactory(){

    let loadFactor = 0.75
    let capacity = 16
    let buckets = []
    buckets.length = capacity

    function hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }


    function set(key, value){
        let bucketNumber = hash(key) 
        bucketNumber = bucketNumber % capacity
        buckets[bucketNumber] = value

        console.log(buckets)
    }

    return {hash, set}
}

export {hashMapFactory}