import type { CookieAlertContent } from '@/types';

export function CookieAlert({ data }: { data: CookieAlertContent }) {
  return (
    <div
      className="alert alert-dismissible show cookiealert"
      role="alert"
      id="cookiealerts"
      style={{ display: "none" }}
    >
      <div className="cookiealert-container">
        <div className="cookiealert-img">
          <span>
            {data.text}
          </span>
        </div>
        {' '}
        <div className="cookiealert-text">
          <div className="que">
            <b>
              {data.b}
            </b>
            {' '}
            <span>
              {data.text2}
            </span>
          </div>
          {' '}
          <div>
            <p dangerouslySetInnerHTML={{ __html: data.text3 }} />
          </div>
        </div>
        {' '}
        <div className="cookiealert-buttons">
          <button
            type="button"
            className="btn custome_btn btn-sm acceptcookies"
            data-dismiss="alert"
            id="agree_to_allowed"
            aria-label={data.customeBtn.ariaLabel}
          >
            {data.customeBtn.text}
          </button>
        </div>
      </div>
    </div>
  );
}
