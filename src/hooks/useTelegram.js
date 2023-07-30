const tg = window.Telegram.WebApp;

export function UseTelegram() {

    const onClose = () => {
        tg.close()
      }


    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.inidDataUnsafe?.user,
    }
}