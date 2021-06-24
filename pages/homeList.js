import React from 'react';

function HomeList() {
  const homeListRender = () => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
      result.push(
        <div style={{ marginTop: '10px', flex: 1, position: 'relative' }}>
          <div style={{ width: '50%', display: 'inline-block'}}>
            <div style={{textAlign: 'center'}}>
                <img src={'/images/home.jpg'} style={{ width: '100px'}} />
            </div>
          </div>
          <div style={{ width: '50%', display: 'inline-block' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {`집 목록 ${i}`}
            </div>
            <div>{`집 목록 ${i} 설명 1`}</div>
            <div>{`집 목록 ${i} 설명 2`}</div>
          </div>
        </div>
      );
    }
    return result;
  };

  return (
    <>
      <div>
        <div
          style={{
            fontSize: '16px',
            color: 'rgb(255, 255, 255)',
            textAlign: 'center',
            borderRadius: '4px',
            backgroundColor: 'rgb(52,152,219)',
            padding: '10px',
          }}
          class=''
        >
          {'얼마집 가이드 보기'}
        </div>
      </div>
      <div>
        <div
          style={{ fontWeight: 'bold', fontSize: '24px', marginTop: '20px' }}
        >
          {'우리집 목록'}
        </div>
      </div>
      <div>
        <div style={{ fontSize: '16px' }} class=''>
          {'등록된 매물이 인증을 기다리고 있습니다'}
        </div>
      </div>
      {homeListRender()}
    </>
  );
}

export default HomeList;
