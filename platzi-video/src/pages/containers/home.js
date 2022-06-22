import React, {Component} from 'react';
import HomeLayout from '../components/home-layout.js';
import Categories from '../../categories/components/categories.js';
import Related from '../components/related.js';
import ModalContainer from '../../widgets/containers/modal.js'
import Modal from '../../widgets/components/modal.js'
import HandleError from '../../error/containers/handleError.js'
import VideoPlayer from '../../player/containers/video-player.js';

class Home extends Component {
    state = {
        modalVisible: false,
        handleError: false,
    }
    handleOpenModal = () =>{
        this.setState({
            modalVisible: true,
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }
    render() {
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <VideoPlayer 
                        autoplay
                    />
                    <Categories 
                    categories={this.props.data.categories}
                    handleOpenModal={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                    <ModalContainer>
                        <Modal
                        handleCloseClick={this.handleCloseModal}
                        >
                            <h1>Esto elemt'´plo</h1>
                    </Modal>
                    </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home