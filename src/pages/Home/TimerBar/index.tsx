import { FC, useContext, useState } from 'react';
import { Contente, LabelSeparetor } from './style';

import { AiOutlinePlus } from 'react-icons/ai'

import Resize from '../../../components/Resize';

import TimerBtn from './TimerBtn';
import Modal from '../../../components/Modal';
import Form from '../../../components/Form';
import { TimerContext } from '../../../contexts/timerContext';

const TimerBar: FC = () => {
  const { timers, createTimer, selectTimer, deleteTimer } = useContext(TimerContext);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)

  const [name, setName] = useState<string>();
  const [working, setWorking] = useState<number>();
  const [rest, setRest] = useState<number>();

  const [deleteName, setDeleteName] = useState<string>("")

  const handleModal = () => {
    setIsOpenModal((state) => !state)
  }

  const handleModalDelete = () => {
    setIsOpenModalDelete((state) => !state)
  }

  const handleDelete = (name: string) => {
    setDeleteName(name)
    handleModalDelete()
  }

  const handleDeleteItem = () => {
    deleteTimer(deleteName)
    handleModalDelete()
  }

  const submitTimer = () => {
    if (name && working && rest) {
      createTimer({ name, working, rest, selected: true });
      setName('')
      setWorking(0)
      setRest(0)
      setIsOpenModal(false)
    }
  }

  return (
    <Resize
      initialWidth={500}
      sense={'right'}
      bgColor='#07090e'
    >
      <Contente>
        <header>
          <h2>Timers</h2>
          <button
            onClick={handleModal}
          >
            <AiOutlinePlus />
          </button>
        </header>
        <ul>
          {timers.length > 0 &&
            timers.map(timer => (
              <TimerBtn
                key={timer.name}
                onDelete={() => handleDelete(timer.name)}
                data={timer}
                onClick={() => selectTimer(timer.name)}
              />
            ))
          }
        </ul>
      </Contente>
      <Modal.Root
        isOpen={isOpenModal}
        onClose={handleModal}
      >
        <Modal.Header title='Create Timer'>
          <Modal.Button onClick={handleModal} />
        </Modal.Header>
        <Modal.Content>
          <Form.Root
            onKeyPressEnter={submitTimer}
          >
            <Form.Input
              onInputChange={(value) => setName(value)}
              inputValue={name}
              label='Nome'
              id="name"
            />
            <LabelSeparetor>
              <Form.Input
                onInputChange={(value) => setWorking(Number(value))}
                inputValue={working}
                label='Working Timer'
                id="working"
              />
              <Form.Input
                onInputChange={(value) => setRest(Number(value))}
                inputValue={rest}
                label='Rest Timer'
                id="rest"
              />
            </LabelSeparetor>
            <Form.Button onClick={submitTimer}>Criar</Form.Button>
          </Form.Root>
        </Modal.Content>
      </Modal.Root>
      <Modal.Root
        isOpen={isOpenModalDelete}
        onClose={handleModalDelete}
      >
        <Modal.Header title='Deletar' />
        <Modal.Content>
          <Form.Root>
            <LabelSeparetor>
              <Form.Button onClick={handleDeleteItem}>Deletar</Form.Button>
              <Form.Button onClick={handleModalDelete}>Cancelar</Form.Button>
            </LabelSeparetor>
          </Form.Root>
        </Modal.Content>
      </Modal.Root>
    </Resize>
  );
};

export default TimerBar;
