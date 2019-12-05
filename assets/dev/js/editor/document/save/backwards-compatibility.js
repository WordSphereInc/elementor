import BaseComponent from 'elementor-common/components/component';

export default class BackwardsCompatibility extends BaseComponent {
	defaultSave() {
		elementorCommon.helpers.softDeprecated( 'saveDraft', '2.8.0', "$e.run( 'document/save/default' )" );

		return $e.run( 'document/save/default' );
	}

	discard() {
		elementorCommon.helpers.softDeprecated( 'discard', '2.8.0', "$e.run( 'document/save/discard' )" );

		return $e.run( 'document/save/discard' );
	}

	doAutoSave() {
		elementorCommon.helpers.softDeprecated( 'doAutoSave', '2.8.0', "$e.run( 'document/save/auto' )" );

		return $e.run( 'document/save/auto' );
	}

	publish( options ) {
		elementorCommon.helpers.softDeprecated( 'publish', '2.8.0', "$e.run( 'document/save/publish' )" );

		return $e.run( 'document/save/auto', { options } );
	}

	saveAutoSave( options ) {
		elementorCommon.helpers.softDeprecated( 'saveAutoSave', '2.8.0', "$e.run( 'document/save/auto', { force: true } )" );

		options.force = true;

		return $e.run( 'document/save/auto', options );
	}

	saveDraft() {
		elementorCommon.helpers.softDeprecated( 'saveDraft', '2.8.0', "$e.run( 'document/save/draft' )" );

		return $e.run( 'document/save/draft' );
	}

	saveEditor( options ) {
		elementorCommon.helpers.softDeprecated( 'saveEditor', '2.8.0', "$e.run( 'document/save/save')" );

		return $e.run( 'document/save/save', options );
	}

	savePending( options ) {
		elementorCommon.helpers.softDeprecated( 'savePending', '2.8.0', "$e.run( 'document/save/pending' )" );

		return $e.run( 'document/save/pending' );
	}

	setFlagEditorChange( status ) {
		elementorCommon.helpers.softDeprecated( 'setFlagEditorChange', '2.8.0', "$e.run( 'document/save/set-is-modified', { status } )" );

		return $e.run( 'document/save/set-is-modified', { status } );
	}

	update( options ) {
		elementorCommon.helpers.softDeprecated( 'update', '2.8.0', "$e.run( 'document/save/update' )" );

		return $e.run( 'document/save/update', { options } );
	}
}
