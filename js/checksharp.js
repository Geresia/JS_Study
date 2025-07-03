// jQuery #누락 체크
(function ($) {
    const original$ = $;
    window.$ = function (selector) {
        if (typeof selector === 'string' && !selector.startsWith('#') && document.getElementById(
                selector)) {
            console.warn(`⚠️ 선택자 "${selector}"는 ID인데 #이 빠졌을 수 있습니다.`);
        }
        return original$.apply(this, arguments);
    };
})(jQuery);

// jQuery #누락시 자동삽입
function selectById(id) {
    if (!id.startsWith('#')) {
        console.warn(`⚠️ ID 선택자에 #이 빠졌습니다. 자동으로 보정합니다: #${id}`);
        id = '#' + id;
    }

    const $el = $(id);

    if ($el.length === 0) {
        console.error(`❌ 요소를 찾을 수 없습니다: ${id}`);
    }

    return $el;
}
