
import { useRawInitData } from "@telegram-apps/sdk-react";


const MOCK_INIT_DATA = `user=%7B%22id%22%3A1888095988%2C%22first_name%22%3A%22Andrey%22%2C%22last_name%22%3A%22Rays%22%2C%22username%22%3A%22RaysRU%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2F0hS8FCr_WPj1HTJsXxly8-Evow22PKuuy2kMarWbVB4.svg%22%7D&chat_instance=-211613851202680421&chat_type=private&auth_date=1758384063&signature=SB4vhmGKQNU0fzP6aZSlOpM9tO0-_ewOIPmSUMLam24ta2vHWK0qT_UqmuaCcy2un2n6Zhjqh_b3Pp_GBlKLBw&hash=d655ed61e479c4a5b04930d6b5237303ae9df983a75843252eadc29ee1f1eed7`;


export function useSafeInitData() {
  try {
    const data = useRawInitData();
    return data || MOCK_INIT_DATA;
  } catch (e) {
    console.warn("⚠️ Telegram initData unavailable, using MOCK:", e);
    return MOCK_INIT_DATA;
  }
}
