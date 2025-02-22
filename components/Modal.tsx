import { Portal } from 'react-portal'
import { XIcon } from '@heroicons/react/outline'

const Modal = ({ isOpen, onClose, children, hideClose = false }) => {
  return (
    <Portal>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
          {isOpen ? (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"
              aria-hidden="true"
              onClick={onClose}
            ></div>
          ) : null}

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          {isOpen ? (
            <div
              className="inline-block bg-th-bkg-2 
              rounded-lg text-left shadow-lg transform transition-all 
              sm:my-8 align-middle sm:max-w-md w-full"
            >
              {!hideClose ? (
                <div className="w-full flex justify-end p-2 pb-0">
                  <button
                    onClick={onClose}
                    className={`text-th-fgd-1 hover:text-th-primary focus:outline-none`}
                  >
                    <XIcon className={`h-5 w-5`} />
                  </button>
                </div>
              ) : (
                <div className="w-full pt-4" />
              )}
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </Portal>
  )
}

const Header = ({ children }) => {
  return (
    <div className={`flex justify-center bg-th-bkg-2 p-2 pt-0`}>{children}</div>
  )
}

Modal.Header = Header

export default Modal
