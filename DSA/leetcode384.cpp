#include<iostream>
using namespace std;

int main(){

    int nums[5] = {0,1,0,3,12}; // array declared
    int size = 5;
     int nonZer0 = 0;

     int j =0;
    
     for(int i=0; i<size; i++){
       if(nums[i] != nonZer0){
        //swapping
        if(i!=j){
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
        j++;
       }
     }


     // printing array
    for(int i=0; i<size; i++){
        cout<<nums[i]<<" ";
    }
    cout<<endl;
    
    return 0;
}