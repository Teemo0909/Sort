class Sort{
    bubbleSort(arr){
        let temp;
        let size = arr.length;
        for(let i=0; i<size-1; i++){
            for(let j=0; j<(size-i)-1; j++){
                if(arr[j] > arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    insertionSort(arr){
        let key , j;
        for(let i = 1; i<arr.length; i++){
            key = arr[i];
            j = i-1;
            while(j>=0 && key < arr[j]){
                arr[j+1] = arr[j];
                j = j-1;
            }
            arr[j+1] = key;
        }
    }

    shellSort(arr){
        let gap = Math.floor(arr.length/2);
        let temp,j;
        while(gap>0){
            for(let i = gap;i<arr.length; i++){
                temp = arr[i];
                j = i;
                while(j>=gap && arr[j-gap] > temp){
                    arr[j] = arr[j-gap];
                    j = j-gap;
                }
                arr[j] = temp;
            }
            gap = Math.floor(gap/2);
        }
    }

    display(arr){
        let str = "";
        for(let i=0; i<arr.length; i++){
            str = str+arr[i]+" ";
        }
        return str;
    }
}

    //---main---
    let N = document.getElementById("Num");
    let R1 = document.getElementById("r1");
    let R2 = document.getElementById("r2");
    let R3 = document.getElementById("r3");
    let R4 = document.getElementById("r4");
    let R5 = document.getElementById("r5");
    let R6 = document.getElementById("r6");

function Random(){
    
    //-- เก็บข้อมูลก่อนแปลง 
    let data = [];
    let Number = parseInt(N.value)
    for(let i = 0; i < Number ;i++){
        data.push(Math.floor(Math.random()*100));
    }
    
    //-- Bubble
    let Data1 = [...data]
    //-- Inser
    let Data2 = [...data]
    //-- Shell
    let Data3 = [...data]
    
    //-- Bubble
    let mySort = new Sort()
    console.log("//-- BubbleSort --/")
    console.log("Before : " , mySort.display(data))
    //--- แสดงข้อมูลก่อนแปลงหน้าเว็บ
    R1.innerHTML = "BubbleSort" + "<br>" + "Before : " + mySort.display(data)
    console.time("BubbleTime")
    mySort.bubbleSort(Data1)
    console.timeEnd("BubbleTime")
    console.log("After : ",mySort.display(Data1))
    //--- แสดงข้อมูลหลังแปลงหน้าเว็บ
    R2.innerHTML = "After : " + mySort.display(Data1);


    //-- insertionSort
    let mySort1 = new Sort()
    console.log("//-- insertionSort --/")
    console.log("Before : " , mySort1.display(data))
    //--- แสดงข้อมูลก่อนแปลงหน้าเว็บ
    R3.innerHTML = "InsertionSort" + "<br>" + "Before : " + mySort1.display(data)
    console.time("insertionTime")
    mySort1.insertionSort(Data2)
    console.timeEnd("insertionTime")
    console.log("After : ",mySort1.display(Data2))
    //--- แสดงข้อมูลหลังแปลงหน้าเว็บ
    R4.innerHTML = "After : " + mySort1.display(Data2);


    //-- shellSort
    let mySort2 = new Sort()
    console.log("//-- shellSort --/")
    console.log("Before : " , mySort2.display(data))
    //--- แสดงข้อมูลก่อนแปลงหน้าเว็บ
    R5.innerHTML = "ShellSort" + "<br>" + "Before : " + mySort2.display(data)
    console.time("shellTime")
    mySort1.shellSort(Data3)
    console.timeEnd("shellTime")
    console.log("After : ",mySort2.display(Data3))
    //--- แสดงข้อมูลหลังแปลงหน้าเว็บ
    R6.innerHTML = "After : " + mySort2.display(Data3);
}