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


        let bucketContents = getBucketContents(bucketNumber)
        if(!bucketContents){
            buckets[bucketNumber] = {key, value}
            console.log(buckets)
            return
        }
        if(bucketContents.key == key){
            buckets[bucketNumber].value = value
            console.log(buckets)
            return
        }
        if(bucketContents){
            // linked list
        }
        
        

        
        
        
    }

    function getBucketContents(bucketNumber, key, value){
        if(buckets[bucketNumber] == null){
            return null
        }

        return buckets[bucketNumber]

    }

    return {hash, set}
}

export {hashMapFactory}