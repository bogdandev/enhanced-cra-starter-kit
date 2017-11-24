import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

const Splash = () => (
  <SplashContainer>
    <Spin size='large' tip="Loading..." />
  </SplashContainer>
)

const SplashContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 50%;
  width: 100%;
  position: fixed;
`

export default Splash
