import styled from 'styled-components'

const DarkBg = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
`

const ModalBg = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  width: 500px;
  height: fit-content;
  background: ${(props) => props.modalBgColor || 'white'};
  color: white;
  border: ${(props) => props.modalBorder || ''};
  border-radius: ${(props) => props.modalBorderRadius || '8px'};
  @media (max-width: 550px) {
    max-width: 75vw;
  }
`

const CrossClose = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -13px;
  margin-right: -13px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.crossCloseBg || 'black'};
  font-size: 23px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: ${(props) => props.crossCloseColor || 'white'};
  text-align: center;
  border: ${(props) => props.crossCloseBorder || ''};
  border-radius: 50%;
  opacity: 1;
  cursor: pointer;
`

const ModalContent = styled.div`
  padding: 15px 30px;
  font-family: ${(props) => props.fontFamily || 'arial'};
  font-size: ${(props) => props.fontSize || '14px'};
  font-weight: ${(props) => props.fontWeight || ''};
  color: ${(props) => props.fontColor || 'black'};
  text-align: ${(props) => props.textAlign || 'center'};
`

export function Modal({
  setIsOpen,
  text,
  modalBgColor,
  modalBorder,
  modalBorderRadius,
  crossCloseBg,
  crossCloseColor,
  crossCloseBorder,
  fontFamily,
  fontWeight,
  fontSize,
  fontColor,
  textAlign,
}) {
  return (
    <>
      <DarkBg onClick={() => setIsOpen(false)} />
      <ModalBg
        modalBgColor={modalBgColor}
        modalBorder={modalBorder}
        modalBorderRadius={modalBorderRadius}
      >
        <CrossClose
          crossCloseBg={crossCloseBg}
          crossCloseColor={crossCloseColor}
          crossCloseBorder={crossCloseBorder}
          onClick={() => {
            setIsOpen(false)
          }}
        >
          X
        </CrossClose>
        <ModalContent
          textAlign={textAlign}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontColor={fontColor}
        >
          {text}
        </ModalContent>
      </ModalBg>
    </>
  )
}
