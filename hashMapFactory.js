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

        setFunctions().assignContentsToBucket(bucketNumber, key, value)
        
        
    }

    function get(key){

        let bucketNumber = hash(key) % capacity
        let bucketContents = buckets[bucketNumber]

        if(!bucketContents){
            return null
        }

        return bucketContents.value
        
    }

    function has(key){
         let bucketNumber = hash(key) % capacity
        let bucketContents = buckets[bucketNumber]

        return bucketContents ? true : false
    }


    function setFunctions(){

         function assignContentsToBucket(bucketNumber, key, value){
        
            let bucketContents = getBucketContents(bucketNumber)
            if(!bucketContents){
                buckets[bucketNumber] = {key, value}
                return
            }
            if(bucketContents.key == key){
                buckets[bucketNumber].value = value
                return
            }
            
            if(bucketContents){
                increaseBucket()
                bucketNumber = bucketNumber % capacity
                assignContentsToBucket(bucketNumber, key, value)
            }
            
    }

        function increaseBucket(){

            let tempBucketStorage = buckets
            capacity *= 2
            buckets = []
            buckets.length = capacity

            

            tempBucketStorage.forEach(element => {
                if(!element){
                    return
                }
                let bucketNumber = hash(element.key) % capacity
                assignContentsToBucket(bucketNumber,element.key,element.value)

            });

        }

        function getBucketContents(bucketNumber){
            if(buckets[bucketNumber] == null){
                return null
            }

            return buckets[bucketNumber]

        }
        return {assignContentsToBucket}
    }
   

    return {hash, set, get, has}
}

export {hashMapFactory}