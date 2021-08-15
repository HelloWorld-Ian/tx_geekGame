((global)=>{
    const ai={
        shapes:[
            [
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0]
                ]
            ],
            [
                [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 0, 1, 0],
                    [1, 1, 1, 0],
                    [0, 0, 0, 0]
                ]
            ],
            [
                [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [0, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 1, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [1, 1, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            [
                [
                    [0, 0, 0, 0],
                    [0, 1, 0, 0],
                    [1, 1, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 1, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [1, 1, 1, 0],
                    [0, 1, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 0, 0]
                ]
            ],
            [
                [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ]
            ],
            [
                [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [1, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [1, 0, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 1, 1, 0],
                    [1, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [1, 0, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ]
            ],
            [
                [
                    [0, 0, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 1, 0],
                    [0, 1, 1, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [1, 1, 0, 0],
                    [0, 1, 1, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 1, 0],
                    [0, 1, 1, 0],
                    [0, 1, 0, 0],
                    [0, 0, 0, 0]
                ]
            ]
            ]

        

    }
    
     
    function isTouched(grids,shapes,r,c){
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                if(shapes[i][j]==1){
                    //判断是否越界
                    if(r+i>19||c+j>9){
                        return true
                    }
                    if(grids[r+i][c+j]!=""){
                        return true
                    }
                }
            }
        }
        return false
      }

    function getlandingHeight(grids,r,c){
        let total=grids[c]
        return total-r
    }

    
   
     function getScore(grid,typeIndex,shapeIndex){
        //grid格式：列(max_x)：10 行的格式(max_y)：20 
        //  * * * * * * * * * * 
        //  * * * * * * * * * * 
        //  * * * * * * * * * * 
        //  * * * * * * * * * * 
        //  * * * * * * * * * * 
        //  * * * * * * * * * * 
        //  * * * * * * * * * *
        //  * * * * * * * * * *  
        //  * * * * * * * * * * 
        //  * * * * * * * * * * 

        let shape=global.ai.shapes[typeIndex][shapeIndex]
        //假下落
        let c=-3
        let min=-1
        let pos=[0,0]
        for(c=0;c<9;c++){
            let r=0

            //判断出方块可以下降的最大高度
            while(!isTouched(shape,x)){
                r++;
            }
            
            //加上4*4正方形内部的偏移量
            for(let i=0;i<4;i++){
                for(let j=0;j<4;j++){
                    if(shape[i][j]==1){
                        r+=i;
                        break;
                    }
                }
            }
            
            //构造一个“假图”，加上了“假下落”的方块
            // let grid_copy=JSON.parse(JSON.stringify(grid))
            // for(let i=0;i<4;i++){
            //     for(let j=0;j<4;j++){
            //         if(shape[i][j]==1){
            //            grid_copy[r+i][c+j]="1"
            //         }
            //     }
            // }

            if(min==-1){
                min=getlandingHeight(grid,r,c)
                pos=[r,c]
            }else if(min<getlandingHeight(grid,r,c)){
                min=getlandingHeight(grid,r,c)
                pos=[r,c]
            }
        }
        return pos
    }

    //判断方块是否碰撞(其他方块和边界)
    function isTouched(grids,shapes,r,c){
      for(let i=0;i<4;i++){
          for(let j=0;j<4;j++){
              if(shapes[i][j]==1){
                  //判断是否越界
                  if(r+i>19||c+j>9){
                      return true
                  }
                  if(grids[r+i][c+j]!=""){
                      return true
                  }
              }
          }
      }
      return false
    }
  
    


    
    //     function getScore(grids,shapes){
    
    //     }
    
    //   // ===================================
    //     // @brief landing height
    //     function landingHeight(boards, shape,tx,ty) {
    //         var rownum = boards.length;
    //         var colnum = boards[0].length;
    
    //         var shapeArr = shape.shapeArr;
    
    //         for ( var i = 0; i < 4; i++ ) {
    //             for ( var j = 0; j < 4; j++ ) {
    //                 if ( shapeArr[i][j] === 1 ) {
    //                     return rownum - (ty + i);
    //                 }
    //             }
    //         }
    //     }
    
    //     // @brief 消行个数
    //     function rowsEliminated(boards, shape,tx,ty) {
    //         var rownum = boards.length;
    //         var colnum = boards[0].length;
    
    //         var shapeArr = shape.shapeArr;
    
    //         var eliminatedNum = 0;
    //         var eliminatedGridNum = 0;
    //         for ( var i = 0; i < rownum; i++ ) {
    //             var flag = true;
    //             for ( var j = 0; j < colnum; j++ ) {
    //                 if ( boards[i][j] == 0 ) {
    //                     flag = false;
    //                     break;
    //                 }
    //             }
    //             if ( flag === true ) {
    //                 eliminatedNum++;
    //                 if ( i >= ty && i < ty + 4 ) {
    //                     for ( var s = 0; s < 4; s++ ) {
    //                         if ( shapeArr[i - ty][s] === 1 ) {
    //                             eliminatedGridNum++;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         return eliminatedNum * eliminatedGridNum;
    //     }
    
    //     // @brief 行变换个数
    //     function rowTransitions(boards) {
    
    //         var rownum = boards.length;
    //         var colnum = boards[0].length;
    
    //         var totalTransNum = 0;
    //         for ( var i = 0; i < rownum; i++ ) {
    //             var nowTransNum = 0;
    //             var prevColor = 1;
    //             for ( var j = 0; j < colnum; j++ ) {
    //                 if ( boards[i][j] != prevColor ) {
    //                     nowTransNum++;
    //                     prevColor = boards[i][j];
    //                 }
    //             }
    //             if ( prevColor === 0 ) {
    //                 nowTransNum++;
    //             }
    //             totalTransNum += nowTransNum;
    //         }
    
    //         return totalTransNum;
    //     }
    
    //     // @brief 列变换个数
    //     function colTransitions(boards) {
    //         var rownum = boards.length;
    //         var colnum = boards[0].length;
    
    //         var totalTransNum = 0;
    //         for ( var i = 0; i < colnum; i++ ) {
    //             var nowTransNum = 0;
    //             var prevColor = 1;
    //             for ( var j = 0; j < rownum; j++ ) {
    //                 if ( boards[j][i] != prevColor ) {
    //                     nowTransNum++;
    //                     prevColor = boards[j][i];
    //                 }
    //             }
    //             if ( prevColor === 0 ) {
    //                 nowTransNum++;
    //             }
    //             totalTransNum += nowTransNum;
    //         }
    
    //         return totalTransNum;
    //     }
    
    //     // @brief 空洞个数
    //     function emptyHoles(boards) {
    //         var rownum = boards.length;
    //         var colnum = boards[0].length;
    
    //         var totalEmptyHoles = 0;
    //         for ( var i = 0; i < colnum; i++ ) {
    //             var j = 0;
    //             var emptyHoles = 0;
    //             for ( ; j < rownum; j++ ) {
    //                 if ( boards[j][i] === 1 ) {
    //                     j++;
    //                     break;
    //                 }
    //             }
    //             for ( ; j < rownum; j++ ) {
    //                 if ( boards[j][i] === 0 ) {
    //                     emptyHoles++;
    //                 }
    //             }
    //             totalEmptyHoles += emptyHoles;
    //         }
    //         return totalEmptyHoles;
    //     }
    
    //     // @brief 井的个数
    //     function wellNums(boards) {
    //         var rownum = boards.length;
    //         var colnum = boards[0].length;
    
    //         var i = 0, j = 0, wellDepth = 0, tDepth = 0;
    
    //         var totalWellDepth = 0;
    //         // *) 获取最左边的井数
    //         wellDepth = 0;
    //         tDepth = 0;
    //         for ( j = 0; j < rownum; j++ ) {
    //             if ( boards[j][0] === 0 && boards[j][1] === 1 ) {
    //                 tDepth++;
    //             } else {
    //                 wellDepth += tDepth * (tDepth + 1) / 2;
    //                 tDepth = 0;
    //             }
    //         }
    //         wellDepth += tDepth * (tDepth + 1) / 2;
    //         totalWellDepth += wellDepth;
    
    //         // *) 获取中间的井数
    //         wellDepth = 0;
    //         for ( i = 1; i < colnum - 1; i++ ) {
    //             tDepth = 0;
    //             for ( j = 0; j < rownum; j++ ) {
    //                 if ( boards[j][i] === 0 && boards[j][i - 1] === 1 && boards[j][i + 1] === 1 ) {
    //                     tDepth++;
    //                 } else {
    //                     wellDepth += tDepth * (tDepth + 1) / 2;
    //                     tDepth = 0;
    //                 }
    //             }
    //             wellDepth += tDepth * (tDepth + 1) / 2;
    //         }
    //         totalWellDepth += wellDepth;
    
    //         // *) 获取最右边的井数
    //         wellDepth = 0;
    //         tDepth = 0;
    //         for ( j = 0; j < rownum; j++ ) {
    //             if ( boards[j][colnum - 1] === 0 && boards[j][colnum - 2] === 1 ) {
    //                 tDepth++;
    //             } else {
    //                 wellDepth += tDepth * (tDepth + 1) / 2;
    //                 tDepth = 0;
    //             }
    //         }
    //         wellDepth += tDepth * (tDepth + 1) / 2;
    //         totalWellDepth += wellDepth;
    
    //         return totalWellDepth;
    
    //     }
})(window)
