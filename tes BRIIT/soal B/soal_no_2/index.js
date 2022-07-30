let i,counter,j;
function prima(n){
    for(i=1;i<=n;i++){
        counter=0;
        for(j=1;j<=i;j++){
            if(i%j==0){
                counter++;
            }
        }
        if(counter==2){
            document.write(i+' ');
        }
    }
}
prima(100)