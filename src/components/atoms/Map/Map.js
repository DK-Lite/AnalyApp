import React, { useEffect } from 'react';
import styled from 'styled-components'

// Redux
import { connect } from 'react-redux';
import { actions as mapActions } from 'ducks/Map';

declare var kakao:any;

const CustomMap = styled.div`
    width: 1280px;
    height: 720px;
    border: 0px dotted;
    border-radius: 15px;
    margin: 40px 0px 0px 0px;
    z-index: 0;
`

function Map(props){
    const { apartInfos } = props
    const { loadAptInfos, updateAptName } = props // actions
    
    useEffect(loadAptInfos,[])
    useEffect(CreateMap,[apartInfos])

    function CreateMap(){
        const el = document.getElementById('map');
        
        const positions = apartInfos.map( data => ({ 
            title: data.apt_name,
            latlng: new kakao.maps.LatLng(data.latitudes, data.longitude),
            road_city_code: data.road_city_code,
            road_code: data.road_code,
        }))
         
        var imageSrc = "http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
        var imageSize = new kakao.maps.Size(24, 35);
          
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
    
        var kakaoMap = new kakao.maps.Map(el, {
            center: new kakao.maps.LatLng(37.563642596447494, 127.0260017409586),
        });
    
        for(var i = 0; i < positions.length; i ++) {
            var marker = new kakao.maps.Marker({
                map: kakaoMap, // 마커를 표시할 지도
                position: positions[i].latlng,
                title : positions[i].title,
                image : markerImage,  
                content: positions[i].road_city_code, 
    
            });
            var uniqueKey = ({
                road_city_code: positions[i].road_city_code,
                road_code : positions[i].road_code,
            });

            // marker click event
            (function(marker, uniqueKey) {
                kakao.maps.event.addListener(marker, 'click', function() {
                    updateAptName(uniqueKey)
                });
            })(marker, uniqueKey);
        }
    }


    return (
            <CustomMap className='Map' id="map" />
    )

}


export default connect(
    state => state.map,
    mapActions
)(Map);
//export default Map;