import EncryptImg from '../Images/Encrypt.jpg'
import FinanceLockImg from '../Images/FinanceLock.jpg'
import HDRImg from '../Images/HDR.jpg'
import SageImg from '../Images/Sage.png'
import Smart_DBImg from '../Images/Smart_DB.jpg'

const Projects = [
    {
      id: 1,
      name: 'Encryption using Binary Trees',
      desc:
        'An Encryption Algorithm developed using binary trees and their various property to maximize difficulty in breakability of message and thus can be decrypted by only the intended receiver',
      img: EncryptImg,
      tls_lib: 'C++',
      link: 'https://github.com/Sidsuresh/Encrypt_Binary_Trees'
    },
    {
      id: 2,
      name: 'FinanceLock',
      desc:
        'An software application developed to ease financing of money loaning for investors and their various customers without the involvement of third parties.',
      img: FinanceLockImg,
      tls_lib: 'Python - Tkinter; Firebase',
      link: 'https://github.com/Sidsuresh/FinanceLock'
    },
    {
      id: 3,
      name: 'Numerical Digit Handwriting Recognition',
      desc:
        'A Convolution Neural Network trained using MNIST dataset to identify handwritten digits with an accuracy of 98.5%',
      img: HDRImg,
      tls_lib: 'Python - TensorFlow',
      link: 'https://github.com/Sidsuresh/HandwritingDigitRecog'
    },
    {
      id: 4,
      name: 'Sage: Blood Bank Management System',
      desc:
        'An online Blood Bank Management System developed to help facilitate the management of blood donor information and the distribution of blood in various parts of the country. People can search and find for blood donors based on their blood types, pin code or city. Additionally, it helps donors to find or organize blood bank camps',
      img: SageImg,
      tls_lib: 'React JS; Firebase',
      link: 'https://github.com/Sidsuresh/BloodBankSystem'
    },
    {
      id: 5,
      name: 'Smart Dustbin',
      desc:
        'Automatic opening and closing of the dustbin when objects are detected near it and constant monitoring of garbage levels inside the bin, complete with a full stack website which automatically updates the authorities regarding the same along with the location',
      img: Smart_DBImg,
      tls_lib: 'Arduino - C++; Python - Flask; Firebase; HTML - CSS - JS',
      link: 'https://github.com/Sidsuresh/Smart-Dustbin'
    },
  ];
  
  export default Projects;