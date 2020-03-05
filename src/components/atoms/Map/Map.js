import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

declare var kakao:any;

const CustomMap = styled.div`
    width: 900px;
    height: 900px;
    border: 0px dotted;
    border-radius: 15px;
    z-index: 0;
`

function Map(props){
    const { data } = props // state
    const { setData } = props // actions

    const [tmp, setTmp] = useState([]);
    const [kakaoMap, setkakaoMap] = useState();
    const [dataList, setdataList] = useState([]);
    


    useEffect(()=>{
        const el = document.getElementById('map');
        
        const positions = tmp.map( data => ({ 
            title: data.apt_name,
            latlng: new kakao.maps.LatLng(data.latitudes, data.longitude),
            road_city_code: data.road_city_code,
            road_code: data.road_code,
        }))
         
        var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
        var imageSize = new kakao.maps.Size(24, 35);
          
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
    
        var kamap = new kakao.maps.Map(el, {
            center: new kakao.maps.LatLng(37.563642596447494, 127.0260017409586),
        });
    
        for(var i = 0; i < positions.length; i ++) {
            var marker = new kakao.maps.Marker({
                map: kamap, // 마커를 표시할 지도
                position: positions[i].latlng,
                title : positions[i].title,
                image : markerImage,  
                content: positions[i].road_city_code, 
    
            });
            var uniqueKey = ({
                road_city_code: positions[i].road_city_code,
                road_code : positions[i].road_code,
            });

        }
        setkakaoMap(kamap)

    },[tmp])

    return (
        <React.Fragment>
            <CustomMap className='Map' id="map" />
        </React.Fragment>
    )

}


export default Map;
//export default Map;