 function hashSetFunctions(){
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
 
 export {hashSetFunctions}