import type { TransportMedium } from '../../types/request';
import t from '../../Utility/i18n';
import { Text, IntlProvider } from 'preact-i18n';
import { Radio } from '../Radio';
import { TRANSPORT_MEDIA } from '../../Utility/requests';
import { ComponentChildren } from 'preact';

type TransportMediumChooserProps = {
    value: TransportMedium;
    onChange: (value: TransportMedium) => void;
    label?: ComponentChildren;
};

export function TransportMediumChooser(props: TransportMediumChooserProps) {
    return (
        <IntlProvider scope="generator" definition={window.I18N_DEFINITION}>
            <fieldset className="request-transport-medium-chooser label-only-fieldset">
                <legend>{props.label ? props.label : <Text id="request-transport-medium" />}</legend>
                <div className="radio-group">
                    {TRANSPORT_MEDIA.map((transport_medium) => (
                        <Radio
                            id={`request-transport-medium-choice-${transport_medium}`}
                            radioVariable={props.value}
                            value={transport_medium}
                            name="transport-medium"
                            onChange={(value) => props.onChange(value as TransportMedium)}
                            label={t(transport_medium, 'generator')}
                        />
                    ))}
                </div>
            </fieldset>
        </IntlProvider>
    );
}
